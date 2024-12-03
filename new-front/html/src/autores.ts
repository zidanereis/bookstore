const form = document.getElementById('form-author') as HTMLFormElement;

export async function cadastrarAuthor(ev: SubmitEvent) {
  ev.preventDefault();
  const formData = new FormData(form);

  const name = formData.get('author-name')?.toString();
  const description = formData.get('author-description')?.toString();
  const birth = formData.get('author-birthdate')?.toString();

  const response = await fetch('http://localhost:3000/author', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      birth,
    }),
  });

  if (!response.ok) {
    return response.status, response.statusText
  }
  alert('Author cadastrado')

  const resultado = await response.json();

  console.log(resultado);
}

form.addEventListener('submit', cadastrarAuthor);
