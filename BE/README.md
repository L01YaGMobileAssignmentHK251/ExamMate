# Backend for Mobile Development course
This is the backend for the Mobile Development course.

# Get API Key
1. Go to [Google aistudio](https://aistudio.google.com/api-keys) to get your API key.
2. Create a file named `.env` in the root directory of the project and add the following line to it:

```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```
# Prerequisites
1. Install uv package manager [uv](https://docs.astral.sh/uv/)
2. Run 
```bash
uv sync
```

# Run
```bash
.venv\Scripts\activate

fastapi run main.py
```
