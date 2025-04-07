const projectList = document.querySelectorAll('.project-lst>li');

projectList.forEach((project) => {
    const content = project.querySelector('.content');

    project.addEventListener('mouseenter', () => {
        project.classList.add('On');
        if (content) {
                project.classList.add('has-hover');
        }
    });

    project.addEventListener('mouseleave', () => {
        project.classList.remove('On');
        project.classList.remove('has-hover');
    });



});
