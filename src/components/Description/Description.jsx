import React from 'react';
import './Description.css';
import Gallery from './Gallery';
function Description() {
    return (
        <div className="description">
            <h1>Agadir City Tour</h1>
           
            <p> Agadir City Tour will give you the opportunity to visit the main
                attractions of the city, and the historical sites in a guided 3 hour
                tour.
            </p>
  
            <p> These are the highlights and the main visits during the city tour: </p>

            <ul>
            <li>Visit the Kasbah Oufella.</li>
            <li>Enjoy the amazing sea view from the top of the mountain.</li>
            <li>Visit the exterior of the Masjid Mohammed V.</li>
            <li>Explore Moroccan architecture and sculptures.</li>
            <li>Visit the argan oil factory.</li>
            <li>Free time in the souk market.</li>
            </ul>

            <h4>Kasbah Oufella:</h4>

            <p> Kasbah Oufella is a historical landmark in Agadir that once housed
                the old city. Much of it was affected by the earthquake that struck
                the city in 1960.
            </p>
            <p> The fort is located on top of a mountain rising 236 meters above sea
                level, in the north of Agadir, near the current port, offering
                panoramic views of the city and the Atlantic Ocean.
            </p>

            <Gallery />
        </div>
    );
}

export default Description;