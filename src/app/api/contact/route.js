
export async function POST(request) {
  try {
    const formData = await request.json();

    // Send POST request to your n8n webhook URL
    const response = await fetch('https://n8n-n8n.q32w7w.easypanel.host/webhook/76a19c4b-538f-406c-87e0-512b0a130ad4', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook responded with status ${response.status}`);
    }

    return new Response(JSON.stringify({ message: 'Contact form submitted successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error forwarding contact form:', error);

    return new Response(JSON.stringify({ error: 'Failed to submit contact form.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
