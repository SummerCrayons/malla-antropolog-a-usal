// Espera a que se cargue todo el documento
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los elementos con la clase 'course'
  const cursos = document.querySelectorAll('.course');

  cursos.forEach(curso => {
    curso.addEventListener('click', () => {
      // Alterna la clase 'aprobado' al hacer clic
      curso.classList.toggle('aprobado');

      // (Opcional) Guardar estado en localStorage
      const id = curso.dataset.id;
      if (id) {
        const estado = curso.classList.contains('aprobado');
        localStorage.setItem(id, estado);
      }
    });

    // Recuperar estado guardado (si lo hay)
    const id = curso.dataset.id;
    if (id && localStorage.getItem(id) === "true") {
      curso.classList.add('aprobado');
    }
  });
});
