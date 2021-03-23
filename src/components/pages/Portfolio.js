import React, {Component} from 'react';
import ProjectCard from '../ProjectCard';
import projects from '../projects.json';
import 'https://github.com/jaccihorvath/react-portfolio/blob/main/src/assets/watchOrRead.PNG?raw=true';
import "https://github.com/jaccihorvath/react-portfolio/blob/main/src/assets/inrhythm.png?raw=true";
import "https://github.com/jaccihorvath/react-portfolio/blob/main/src/assets/code-quiz.png?raw=true";
import "https://github.com/jaccihorvath/react-portfolio/blob/main/src/assets/employee-summary.PNG?raw=true";
import "https://github.com/jaccihorvath/react-portfolio/blob/main/src/assets/password-generator.png?raw=true";
import "https://github.com/jaccihorvath/react-portfolio/blob/main/src/assets/fitness-tracker.png?raw=true";
import "https://github.com/jaccihorvath/react-portfolio/blob/main/src/assets/burger-app.png?raw=true";
import "https://github.com/jaccihorvath/react-portfolio/blob/main/src/assets/note-taker.png?raw=true";
import "https://github.com/jaccihorvath/react-portfolio/blob/main/src/assets/employee-directory.png?raw=true";
import "https://github.com/jaccihorvath/react-portfolio3.0/blob/67b38e7e85a0dc053846963a1e2ddf36c6ebf3bb/src/assets/google-books.png";




const styles = {
    jumbotron: {
        backgroundColor:"white",
        marginTop:100,
        marginBottom:100
    }
}

class Portfolio extends Component {
    state = {
        projects
    };

    render() {
        return (
            <div className="container-sm container-md container-lg container-xl">
        <div className="jumbotron shadow" style={styles.jumbotron}>
            <h1 className="display-4 text-center">
                Portfolio
            </h1><br/>

            <div className="row">
                <div className="col">
                            <div className="row">
                                {this.state.projects.map(project => (
                                    <ProjectCard
                                        id={project.id}
                                        title={project.title}
                                        image={project.image}
                                        repo={project.repo}
                                        deployed={project.deployed} />
                                    
                                ))}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}


export default Portfolio;