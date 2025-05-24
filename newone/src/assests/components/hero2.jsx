const duckCards = [
    {
        name: "Quackington Drake",
        username: "@quackdrake",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7vgMJjBzKuEgG-e_Ze5pOEmTuKcfZOw_x0E-OLYTvC5qjdVRkSnZDGE5ph0Rgxjvx1_9vndLFpKRi8dYJ9jZvRg",
        profileImageUrl: "https://www.byrdie.com/thmb/rjy_DujcCIK6RgIUJiWtNbD-mZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-20921973551-0174546a14d644139cc5daed03a995e2.jpg",
        content: "Known for leading the annual Duck Parade, Quackington is the true face of duck diplomacy."
    },
    {
        name: "Feather McFlap",
        username: "@feathermcflap",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Bucephala-albeola-010.jpg",
        profileImageUrl: "https://www.byrdie.com/thmb/x7aZz-kLoLIBjAUN987SKrMwczg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1458818451-555bdf3bf3b04f32959b314b17b90aaa.jpg",
        content: "Feather has mastered the art of synchronized pond splashes—duck society considers it a talent!"
    },
    {
        name: "Waddleton Pondsworth",
        username: "@waddlepond",
        imageUrl: "https://www.saginawzoo.com/wp-content/uploads/2025/04/ducks-2-1024x683.jpg",
        profileImageUrl: "https://files.myglamm.com/site-images/original/Top-Knot-Hairstyle-square-face-hairstyle.png",
        content: "This duck philosopher spends his days contemplating the deep mysteries of ripples on the water."
    },
    {
        name: "Billington Quackers",
        username: "@billquack",
        imageUrl: "https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg",
        profileImageUrl: "https://thumbs.dreamstime.com/b/wellbeing-ideas-portrait-smiling-positive-winsome-caucasian-woman-wearing-fashion-sunglasses-beach-seaside-346749390.jpg",
        content: "Rumor has it that Billington once quacked the perfect melody to calm a rowdy pond gathering."
    },
    // {
    //     name: "Daphne Splashworth",
    //     username: "@daphsplash",
    //     imageUrl: "https://bulma.io/assets/images/placeholders/1280x960.png",
    //     profileImageUrl: "https://bulma.io/assets/images/placeholders/96x96.png",
    //     content: "No duck has ever performed a more elegant dive into the water than Daphne—her form is perfection."
    // }
];


const CardsList = () => {
    return (
        <>
            {duckCards.map((duck, index) => (
                <div key={index} className="card mx-1" style={{minWidth:"320px"}}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={duck.imageUrl} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={duck.profileImageUrl} alt="Placeholder image"  className="image is-rounded img-cover"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-5">{duck.name}</p>
                                <p className="subtitle is-6">{duck.username}</p>
                            </div>
                        </div>
                        <div className="content">
                            <p className="is-size-6">{duck.content}</p>
                            <time dateTime="2016-1-1">
                                <span className="is-size-7">11:09 PM - 1 Jan 2016</span>
                            </time>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

const Hero2 = () =>{
    return (
        <>
            <section className="section">
                <div className="columns my-4 d-flex">
                    <div className="column mx-auto is-flex" style={{overflow:"auto"}}>
                        <>
                        <CardsList/>
                        </>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero2;