from flask import Flask, request, jsonify
import requests
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# 🔥 Paste your Huggingface API token here:
HUGGINGFACE_API_TOKEN = "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"

# Function to send text to Huggingface
def analyze_sentiment(text):
    api_url = "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english"
    headers = {
        "Authorization": f"Bearer {HUGGINGFACE_API_TOKEN}",
        "Content-Type": "application/json"
    }
    payload = {
        "inputs": text
    }

    response = requests.post(api_url, headers=headers, json=payload)

    if response.status_code == 200:
        result = response.json()
        label = result[0]["label"]  # "POSITIVE" or "NEGATIVE"
        score = result[0]["score"]  # confidence between 0 and 1
        return label, score
    else:
        return "Error", 0

# Route that frontend will hit
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    journal_text = data.get('text', '')

    if not journal_text:
        return jsonify({"error": "No text provided"}), 400

    label, score = analyze_sentiment(journal_text)

    return jsonify({
        "mood": label,
        "confidence": score
    })

if __name__ == '__main__':
    app.run(debug=True)
