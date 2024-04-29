import React from "react";

const ButtonGrp = ({ children, spacing = 1, isAttached }) => {
    // Transformer les enfants (boutons) avec le style de marge droite
    const spacedChildren = React.Children.map(children, (child, index) => {
        // Vérifier si l'enfant est le dernier dans la liste
        const isLastChild = index === children.length - 1;
        const isFirstChild = index === 0;

        // Calculer le style à appliquer à cet enfant

        if(spacing <= 0){
            let childStyle = {
                marginRight: isLastChild ? 0 : spacing.toString() + "rem",
                marginLeft: 0,
                marginTop: 5,
                marginBottom: 5,

                borderTopLeftRadius: isFirstChild ? 5 + "px" : 0,
                borderBottomLeftRadius: isFirstChild ? 5 + "px" : 0,
                borderTopRightRadius: isLastChild ? 5 + "px" : 0,
                borderBottomRightRadius: isLastChild ? 5 + "px" : 0

            };

            return React.cloneElement(child, {
                ...child.props, // Toutes les props existantes de l'enfant
                style: { ...(child.props.style || {}), ...childStyle },
                // Fusionner avec les styles existants
            });
        }else{
            let childStyle = {
                marginRight: isLastChild ? 0 : spacing.toString() + "rem",
                marginLeft: 0,
                marginTop: 5,
                marginBottom: 5,
            };

            return React.cloneElement(child, {
                ...child.props, // Toutes les props existantes de l'enfant
                style: { ...(child.props.style || {}), ...childStyle },
                // Fusionner avec les styles existants
            });
        }
    });

    if(isAttached)
        return <div className={"gpt_button isAttached"}>{spacedChildren}</div>;
    else
        return <div className={"gpt_button"}>{spacedChildren}</div>;
};

export default ButtonGrp;
