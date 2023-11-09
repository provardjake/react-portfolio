import selfPortrait from "../assets/images/Portrait.png";

export default function AboutMe(){
    return(
        <div className="container p-4 text-center">
        <h1>About me</h1>
        <p className="pt-3 fs-4">
          My name is Jake Provard and I am an aspiring web developer. I&apos;m diving headfirst into the exciting world of web development. 
          While I might not have loads of professional experience under my belt just yet, what I lack in experience, I make up for with 
          passion and a hunger to learn. I&apos;ve been tinkering with code and building websites for a while now. It&apos;s a creative playground where I get to mix design with functionality. Every project I work on is a chance to learn something new and create something awesome.
        </p>

        <img src={selfPortrait} width="300" id="portrait-border"></img>
      </div>
    )
}