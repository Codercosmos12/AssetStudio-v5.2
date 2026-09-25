from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import json
from groq import Groq

load_dotenv()

app = Flask(__name__)
CORS(app)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def extract_clean_json(text_payload):
    text_payload = text_payload.strip()
    start_idx = text_payload.find("{")
    end_idx = text_payload.rfind("}")
    if start_idx == -1 or end_idx == -1 or end_idx <= start_idx:
        raise ValueError("Valid JSON brackets missing.")
    return text_payload[start_idx:end_idx + 1]

@app.route("/api/generate", methods=["POST"])
def generate_assets():
    asset_type = "Cover Letter"

    try:
        data = request.get_json(silent=True) or {}

        industry = data.get("industry", "IT")
        asset_type = data.get("assetType", "Cover Letter")
        word_count = data.get("wordCount", 400)
        skills = data.get("skills", "")
        experience = data.get("experience", "Intermediate")
        job_description = data.get("jobDescription", "")
        target_title = data.get("targetTitle", "")
        education = data.get("education", "")

        messages = [
            {
                "role": "system",
                "content": f"""
You are an experienced human Career Consultant creating a natural, professional {asset_type} for the {industry} sector.

Write with natural variation in sentence length, paragraph structure, transitions, and phrasing. Avoid repetitive templates, generic filler, and overly predictable wording.

Use contractions naturally where appropriate ("don't", "can't", "it's", "I've", "we're").

Avoid these words:
"Additionally", "Consequently", "Therefore", "Ultimately",
"Notably", "Furthermore", "Moreover", "Tapestry", "Delve", "Elevate".

DOCUMENT TYPE RULES:

If 'Cover Letter':
- Write as a professional candidate applying for a full-time company role.
- Focus on relevant skills, experience, collaboration, contribution, and alignment with the role.
- Do not present the candidate as a freelancer unless explicitly stated.

If 'Detailed Bio':
- Write a warm, straightforward professional career history.
- Make the person's experience and progression feel natural.

If 'Resume Blueprint':
- Use uppercase section headings.
- Use rows prefixed with "- ".
- Keep information structured and concise.

WORD COUNT:
Aim for approximately {word_count} words. Prioritize useful information and natural writing instead of repetitive padding.

RESPONSE REQUIREMENT:
Return ONLY valid JSON in exactly this structure:

{{
  "title": "A short descriptive title.",
  "documentBody": "The complete generated document."
}}
"""
            },
            {
                "role": "user",
                "content": f"""INDUSTRY: {industry}
                DOCUMENT TYPE: {asset_type}
                TARGET JOB TITLE: {target_title}
                EDUCATION: {education}
                CORE SKILLS: {skills}
                EXPERIENCE LEVEL: {experience}
                JOB DESCRIPTION: {job_description}"""
            }
        ]

        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            temperature=0.82,
            presence_penalty=0.2,
            frequency_penalty=0.1,
            response_format={"type": "json_object"},
            max_tokens=4096,
            messages=messages
        )

        raw_output = response.choices[0].message.content

        if not raw_output:
            raise ValueError("Model returned an empty response.")

        clean_json_string = extract_clean_json(raw_output)
        parsed_json = json.loads(clean_json_string)

        normalized_response = {
            "title": f"COMPILED_{asset_type.upper()}",
            "documentBody": ""
        }

        if "documentBody" in parsed_json:
            normalized_response["documentBody"] = parsed_json["documentBody"]
        elif "body" in parsed_json:
            normalized_response["documentBody"] = parsed_json["body"]
        elif "content" in parsed_json:
            normalized_response["documentBody"] = parsed_json["content"]
        else:
            normalized_response["documentBody"] = str(parsed_json)

        if "title" in parsed_json:
            normalized_response["title"] = parsed_json["title"]

        return jsonify(normalized_response), 200

    except Exception as e:
        print(f"Backend Exception Triggered: {e}")
        return jsonify({
            "title": f"COMPILED_{asset_type.upper()}",
            "documentBody": f"Generation failed.\n\nError: {str(e)}"
        }), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port, debug=False)