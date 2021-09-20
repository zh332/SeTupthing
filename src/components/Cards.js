import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Meet our Great Therapists</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                        src="images/red sus.png"
                        text="Specially trained in CBT (Cognitive Behavourial Therapy), Red Imposter is the perfect therapist if you are feeling down and just want a reliable person to help you get back up."
                        label="Red Imposter"
                        path='/catalogue'
                        />
                        <CardItem
                        src="images/carl.jpg"
                        text="Carl Rogers was born in 1902 and was among the founders of the humanistic aproach in psychology. His extensive years of experience means he is most suited for all of your needs."
                        label="Carl Rogers"
                        path='/catalogue'
                        />
                        <CardItem
                        src="images/tyler.jpg"
                        text="Hailing from the prestigious streaming platform Twitch.tv, Tyler Steinkamp is a spectacular achiever, who has honed both his body and his gaming ability. He is a veteran who has survived fiery pits of League of Legends and seen it all. Nothing scares tyler1. "
                        label="loltyler1"
                        path='/catalogue'
                        />

                    </ul>
                    <ul className="cards-items">
                    <CardItem
                        src="images/gamma.png"
                        text="Gamma ray is a packet of electromagnetic energy emitted by the nucleus of some radionuclides following radioactive decay. Her extremely high speeds mean she is always first to solve your problems. If you want an efficient easy solution, then this is the gal for you. "
                        label="Gamma Radiation"
                        path='/catalogue'
                        />
                        <CardItem
                        src="images/crewmate.png"
                        text="Crewmate has spent his entire life living under the shadow of his older cousin, Red Imposter. But despite this, he never seems to give up. If there is a task that must be complete, he will be there to complete it. You could even say he is more reliable than Red Imposter."
                        label="Crewmate"
                        path='/catalogue'
                        />
                        <CardItem
                        src="images/jermasus.jpg"
                        text="This guy has a really funny face. He'll cheer you up. "
                        label="Jerma"
                        path='/catalogue'
                        />
                    </ul>
                    <ul className="cards-items">

                    <CardItem
                        src="images/wtdd.jpg"
                        text="Sir Warner Truman Dog Doin the 3rd (a.k.a What The Dog Doin) is a multibillionare entrepreneur who has mastered several languages imcluding ASL and Canadian. His tragic backstory means he can relate to all those who have suffered from traumatic events; he is the perfect dog to go to for victims of ptsd.  "
                        label="W.T. Dog Doin"
                        path='/catalogue'
                        />
                    <CardItem
                        src="images/dom.jpeg"
                        text="This guy realy loves family. Specialising in family therapy, Dominic is the glue that holds families and relationships together. It is said that 100% of all divorces worldwide are caused due to couples not knowing the Five Step Toretto Process. "
                        label="Dominic Toretto"
                        path='/catalogue'
                        />
                    <CardItem
                        src="images/true.jpeg"
                        text="True Or Rubbish is credited with verifying over half of all scientific theories and experiments in the world. His uncanny ability to seek the truth and knowledge may make him seem intimidating, but inside all he wants is for the world to prosper with knowledge. "
                        label="True Or Rubbish"
                        path='/catalogue'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
