document.addEventListener('DOMContentLoaded', () => {
  const cursos = document.querySelectorAll('.course');

  cursos.forEach(curso => {
    const id = curso.dataset.id;

    // Recuperar estado guardado en localStorage
    if (localStorage.getItem(id) === 'true') {
      curso.classList.add('aprobado');
    }

    curso.addEventListener('click', () => {
      curso.classList.toggle('aprobado');

      // Guardar o eliminar del localStorage
      const estaAprobado = curso.classList.contains('aprobado');
      localStorage.setItem(id, estaAprobado);
    });
  });
});
