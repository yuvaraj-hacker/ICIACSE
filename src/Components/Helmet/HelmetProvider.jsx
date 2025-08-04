import { Helmet } from "react-helmet";

const HelmetComponent = ({ title, canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta name="title" content="ICIACSE – International Conference on Computer Science & Engineering" />
            <meta name="description" content="Join ICIACSE to explore latest research in computer science, software engineering, AI, cloud, and emerging technologies. Submit your paper today!" />
            <meta name="keywords" content="ICIACSE, computer science conference, software engineering, AI conference, research conference, call for papers, international conference" />
            <meta name="author" content="ICIACSE Organizing Committee" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://iciacse.com/" />
            <meta property="og:title" content="ICIACSE – International Conference on Computer Science & Engineering" />
            <meta property="og:description" content="Explore pioneering research and innovation at ICIACSE. Topics include AI, software engineering, cloud, and emerging areas." />
            <meta property="og:image" content="https://iciacse.com/assets/images/ICIACSE%20LOGO.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://iciacse.com/assets/images/ICIACSE%20LOGO.png" />

        </Helmet>
    );
};

export default HelmetComponent;
