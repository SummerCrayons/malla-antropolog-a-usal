document.addEventListener('DOMContentLoaded', () => {
  const cursos = document.querySelectorAll('.course');
  
  cursos.forEach(curso => {
    curso.addEventListener('click', () => {
      curso.classList.toggle('aprobado');
    });
  });
});
