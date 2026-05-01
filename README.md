# Election Process Education Assistant

An interactive, AI-powered web application designed to educate citizens about the election process, voting timelines, and civic duties.

## 🚀 Live Demo
[Insert your Cloud Run URL here once deployed]

## ✨ Features

- **🤖 AI Election Assistant**: A smart chatbot powered by **Google Gemini API** that answers election-related questions neutrally and educationally.
- **🃏 Interactive Flashcards**: Flip cards to learn key election concepts like "Primary Elections" and "Electoral College".
- **📅 Visual Timeline**: A step-by-step guide through the entire election lifecycle (Registration -> Nominations -> Campaigning -> Polling -> Counting -> Results).
- **📊 Data & Analytics**: Interactive charts showing historical voter turnout and registration statistics.
- **🧠 Knowledge Quiz**: Test your civic knowledge with an interactive quiz featuring real-time feedback.
- **♿ Fully Accessible**: Designed with high contrast, semantic HTML, and full keyboard navigation (WCAG compliant).

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **AI Integration**: Google Gemini SDK (`@google/genai`)
- **Deployment**: Google Cloud Run (Containerized with Docker)

## ☁️ Deployment to Google Cloud Run

To deploy this project to GCP, follow these steps:

### Prerequisites
1. Install the [Google Cloud CLI](https://cloud.google.com/sdk/docs/install).
2. Create a project in the [GCP Console](https://console.cloud.google.com/).
3. Get a Gemini API Key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Deployment Steps
1. **Authenticate and set project**:
   ```powershell
   gcloud auth login
   gcloud config set project YOUR_PROJECT_ID
   ```

2. **Deploy directly from source**:
   Replace `YOUR_API_KEY` with your actual Gemini API key.
   ```powershell
   gcloud run deploy election-assistant --source . --region us-central1 --allow-unauthenticated --set-env-vars="GOOGLE_GENAI_API_KEY=YOUR_API_KEY"
   ```

3. **Follow the prompts**:
   - Allow unauthenticated invocations: `y`
   - Enable required APIs: `y`

Once finished, the terminal will provide a **Service URL** where your app is live!

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rubini-0729/election-process-assistant.git
   cd election-process-assistant
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file and add your Gemini API key:
   ```env
   GOOGLE_GENAI_API_KEY=your_actual_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🏆 Competition Criteria Adherence

This project was built specifically to excel in the following areas:
- **Code Quality**: Clean, modular React components with TypeScript.
- **Security**: Server-side API handling and strict AI system instructions.
- **Efficiency**: Optimized Docker builds and static site generation.
- **Accessibility**: ARIA labels and high-contrast UI design.
- **Google Services**: Deep integration with Gemini AI and GCP Cloud Run.
