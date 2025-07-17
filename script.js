document.addEventListener('DOMContentLoaded', () => {
  const cursos = document.querySelectorAll('.course');

  cursos.forEach(curso => {
    const id = curso.dataset.id;

    // Recuperar estado guardado
    if (localStorage.getItem(id) === 'true') {
      curso.classList.add('aprobado');
    }

    curso.addEventListener('click', () => {
      curso.classList.toggle('aprobado');
      localStorage.setItem(id, curso.classList.contains('aprobado'));
    });
  });
});
