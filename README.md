# Insect Identification App

A secure React application that identifies insects using AI-powered image recognition.

## Features

- 🔒 **Secure API Key Management** - API keys are protected server-side using Supabase Edge Functions
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🖼️ **Drag & Drop Upload** - Easy image uploading with preview
- 🔍 **Detailed Results** - Species identification with confidence scores and descriptions
- 🌐 **Fast & Reliable** - Built with Vite and React for optimal performance

## Security

This application implements proper API key security by:

1. **Server-side API calls** - Sensitive API keys are stored securely in Supabase Edge Functions
2. **No client-side exposure** - API keys are never exposed in the browser or source code
3. **Secure proxy pattern** - Frontend communicates with our secure backend, which then calls the third-party API

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Connect to Supabase

1. Click the "Connect to Supabase" button in the top right of the Bolt interface
2. This will automatically set up your Supabase project and configure environment variables

### 3. Configure API Key in Supabase

1. Go to your Supabase dashboard
2. Navigate to Project Settings → Edge Functions → Environment Variables
3. Add a new environment variable:

### 4. Deploy Edge Function

The edge function will be automatically deployed when you connect to Supabase.

### 5. Run the Application

```bash
npm run dev
```

## How It Works

1. **Frontend**: User uploads an image through the React interface
2. **Edge Function**: Image is sent to our secure Supabase Edge Function
3. **API Call**: Edge function makes the request to Kindwise API with the secure API key
4. **Response**: Results are returned to the frontend and displayed to the user

## Environment Variables

### Frontend (.env)
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Edge Function Environment Variables
```
KINDWISE_API_KEY=your_kindwise_api_key
```

## Deployment

### Vercel Deployment

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Deploy

The Supabase Edge Function will automatically handle the secure API calls.

## Security Benefits

- ✅ API keys are never exposed to the client
- ✅ No risk of key theft through browser inspection
- ✅ Server-side rate limiting and validation
- ✅ Secure authentication through Supabase
- ✅ CORS protection and request validation

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Supabase Edge Functions (Deno)
- **API**: Kindwise Insect Identification API
- **Deployment**: Vercel (Frontend) + Supabase (Backend)

## License

© 2025 [sauravkumar.link](https://sauravkumar.link)