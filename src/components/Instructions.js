const Instructions = ({title, steps}) =>
    <section className="instructions">
        <h2>{title}</h2>
        {
            steps.map((step, idx) => {
                return <p key={idx}>{step}</p>
            })
        }
    </section>

export default Instructions;
