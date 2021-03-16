import React from 'react';
import headshot from '../../assets/me.jpg'

const styles = {
    jumbotron: {
        backgroundColor:"white",
        marginTop:100,
        marginBottom:100
    },
    headshot: {
        maxWidth:"50%",
        maxHeight:"auto",
        minWidth:325,
        paddingRight:25,
        paddingBottom:15
    }
}

const About = () => (
    <div className="container">
        <div className="jumbotron shadow" style={styles.jumbotron}>
            <h1 className="display-4 text-center">
                About Me
            </h1><br />
            
            <div className="row">
                <div className="col">
                    <img
                        className="img-fluid float-sm-left float-md-left float-lg-left float-xl-left"
                        style={styles.headshot}
                        src={headshot}
                        alt="Jacci Horvath" />
                    
                    <p className="lead"><em>
                        Hi, I'm Jacci Horvath!
                    </em></p>

                    <p>
                        I am a self-taught graphic designer and marketing professional living in Youngstown, OH. Although I  have a little background in basic HTML, I am new to coding and working my way through The Ohio State University's Full-Stack Coding Bootcamp.
                    </p>

                    <p>
                        I am a dedicated and hardworking individual who cares about others and is always searching to find a common ground and form meaningful connections. I am insatiably curious and love problem solving. In my free time, I enjoy music, art, cooking and being outdoors.
                    </p>

                    <p>
                        I am looking forward to completing this course and starting the next chapter in my career. Feel free to check out some of the projects I've been working on and contact me if you're interested in working together.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default About;