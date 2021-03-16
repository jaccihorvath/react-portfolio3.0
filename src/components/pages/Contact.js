import React from 'react';
import email from '../../assets/email.png';
import phone from '../../assets/phone.png';
import lines from '../../assets/lines.png';

const styles = {
    jumbotron: {
        backgroundColor:"white",
        marginTop:100,
        marginBottom:100
    },
    icon: {
        height: 20,
        marginRight: 5
    },
    lines: {
        height: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
}


const Contact = () => (
    <div className="container-sm container-md container-lg container-xl">
        <div className="jumbotron shadow" style={styles.jumbotron}>
            
            <h1 className="display-4 text-center">
                Let's Get In Touch
            </h1><br/>



            <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Youngstown,%20Ohio&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br /><br />
            
            <p className="lead text-center">
                Thanks for stopping by! You can reach me at:
            </p>
            
            
            <p className="text-center">
                <img src={email} style={styles.icon} />
                <a
                    href="mailto:workwithjacci@gmail.com"
                    rel="noreferrer"
                    target="_blank">
                    workwithjacci@gmail.com   
                </a>
                
                <img src={lines} style={styles.lines} />

                <img src={phone} style={styles.icon} />330-507-5166
            </p>

        </div>
    </div>
)

export default Contact;
