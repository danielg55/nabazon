from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify(messages=[dict(title='הודעה 1', description="זה התוכן של הודעה 1")]*17)


if __name__ == '__main__':
    app.run()
