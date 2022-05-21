'use strict'

function init(){
    var projects = document.getElementById('inject-projects')

    projects.insertAdjacentHTML(
        'beforebegin',
        `
        <section class="projects-container">
        <article>
            <div>
                <h2 class="projects-title">Projetos</h2>
            </div>
        </article>

        <!-- Recentes -->

        <article class="projects-article">
            <div class="projects">
                <div class="project-01 project-layout">
                    <a href="" target="_blank" class="link-remest">
                        <div class="project-img">
                            <img src="projects/react-cards.png" alt="projeto React Cards">
                        </div>
                        <div class="project-text">
                            <h3 class="project-title">React Cards</h3>

                            <p class="project-description">
                                Projeto desenvolvido em React, uso de API de imagens, 
                                títulos e textos para criar cards.
                            </p>
                            <p class="project-tecnologic">
                                Tecnologias: "React", "API" e "CSS".
                            </p>
                        </div>
                    </a>
                </div> <!-- project-01 -->
                
                <div class="project-02 project-layout">
                    <a href="" target="_blank" class="link-remest">
                        <div class="project-img">
                            <img src="projects/react-cards.png" alt="projeto React Cards">
                        </div>
                        <div class="project-text">
                            <h3 class="project-title">React Cards</h3>

                            <p class="project-description">
                                Projeto desenvolvido em React, uso de API de imagens, 
                                títulos e textos para criar cards.
                            </p>
                            <p class="project-tecnologic">
                                Tecnologias: "React", "API" e "CSS".
                            </p>
                        </div>
                    </a>
                </div> <!-- project-02 -->

                <div class="project-03 project-layout">
                    <a href="" target="_blank" class="link-remest">
                        <div class="project-img">
                            <img src="projects/react-cards.png" alt="projeto React Cards">
                        </div>
                        <div class="project-text">
                            <h3 class="project-title">React Cards</h3>

                            <p class="project-description">
                                Projeto desenvolvido em React, uso de API de imagens, 
                                títulos e textos para criar cards.
                            </p>
                            <p class="project-tecnologic">
                                Tecnologias: "React", "API" e "CSS".
                            </p>
                        </div>
                    </a>
                </div> <!-- project-03 -->

                <div class="project-04 project-layout">
                    <a href="" target="_blank" class="link-remest">
                        <div class="project-img">
                            <img src="projects/react-cards.png" alt="projeto React Cards">
                        </div>
                        <div class="project-text">
                            <h3 class="project-title">React Cards</h3>

                            <p class="project-description">
                                Projeto desenvolvido em React, uso de API de imagens, 
                                títulos e textos para criar cards.
                            </p>
                            <p class="project-tecnologic">
                                Tecnologias: "React", "API" e "CSS".
                            </p>
                        </div>
                    </a>
                </div> <!-- project-03 -->

                <div class="project-05 project-layout">
                    <a href="" target="_blank" class="link-remest">
                        <div class="project-img">
                            <img src="projects/react-cards.png" alt="projeto React Cards">
                        </div>
                        <div class="project-text">
                            <h3 class="project-title">React Cards</h3>

                            <p class="project-description">
                                Projeto desenvolvido em React, uso de API de imagens, 
                                títulos e textos para criar cards.
                            </p>
                            <p class="project-tecnologic">
                                Tecnologias: "React", "API" e "CSS".
                            </p>
                        </div>
                    </a>
                </div> <!-- project-03 -->

                <div class="project-06 project-layout">
                    <a href="" target="_blank" class="link-remest">
                        <div class="project-img">
                            <img src="projects/react-cards.png" alt="projeto React Cards">
                        </div>
                        <div class="project-text">
                            <h3 class="project-title">React Cards</h3>

                            <p class="project-description">
                                Projeto desenvolvido em React, uso de API de imagens, 
                                títulos e textos para criar cards.
                            </p>
                            <p class="project-tecnologic">
                                Tecnologias: "React", "API" e "CSS".
                            </p>
                        </div>
                    </a>
                </div> <!-- project-03 -->
                
            </div>
        </article>

        <!-- Ver Mais -->
        <!-- Em Desenvolvimento -->

        <article class="display-none">
            <button>Ver Mais</button>
        </article>
    </section>
        `
    )
}

init()

// document.querySelector('')
document.querySelector("div.project-01.project-layout > a").href='https://github.com/MatheusPalmieri/React-Cards' // Project 1
document.querySelector("div.project-02.project-layout > a").href='https://github.com/MatheusPalmieri/Palmieri-Health' // Project 2
document.querySelector("div.project-03.project-layout > a").href='https://github.com/MatheusPalmieri/Login-Dark' // Project 3
document.querySelector("div.project-04.project-layout > a").href='https://github.com/MatheusPalmieri/Range-Hotel' // Project 4
document.querySelector("div.project-05.project-layout > a").href='https://github.com/MatheusPalmieri/Theme-Mode' // Project 5
document.querySelector("div.project-06.project-layout > a").href='https://github.com/MatheusPalmieri/Create-Account' // Project 6

