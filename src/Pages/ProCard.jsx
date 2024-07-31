import React from 'react'

const ProCard = (props) => {

    console.log(props);
    return (
        <article className="card">
            <img
                className="card__background"
                src={props.allitem.img}
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
            />
            <div className="card__content | flow">
                <div className="card__content--container | flow">
                    <h2 className="card__title">{props.allitem.title}</h2>
                    <p className="card__description">
                        {props.allitem.desc}
                    </p>
                </div>
                <button className="card__button">Read more</button>
            </div>
        </article>
    )
}

export default ProCard