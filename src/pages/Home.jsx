import bgImg from '/src/assets/bg-img.jpg';

function Home() {
    return (
        <>
            <img src={bgImg} alt="Background" className="full-width-img" />
            <h1 className="text-black">home</h1>
        </>
    );
}

export default Home;
