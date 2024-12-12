import React from 'react';

const Text = () => {
    return (
        <>
            <div class="text-content">
                <h4>Drama 
                    <i class="fa-solid fa-slash fa-rotate-by" style="--fa-rotate-angle: 52deg;" ></i> Thriller 
                    <i class="fa-solid fa-slash fa-rotate-by" style="--fa-rotate-angle: 52deg;" ></i> Supernatural
                </h4>
                <h1>Stranger Things</h1>
                <h2>2019 DIRECTOR: 
                    <span class="color">Shawn Levy</span> seasons: 
                    <span class="color">3 (5 Episodes)</span>
                    </h2>
                <p class="text-file"> In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</p>
                <p class="size-star">
                    <span style= "color:yellow;">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i></span>
                <span style= "color:white;">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i></span>
                </p>
                <button class="stream">STREAM NOW <span style= "color:white;"><i class="fa-regular fa-circle-play"></i></span></button>
                <button class="episodes">ALL EPISODES</button>
        </div>
            
        </>
    );
};

export default Text;