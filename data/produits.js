// Fichier : js/boutique.js

document.addEventListener('DOMContentLoaded', () => {
    // Vérifie que le tableau 'produits' du fichier data/produits.js est chargé
    if (typeof produits === 'undefined' || produits.length === 0) {
        console.error("Le tableau 'produits' n'est pas chargé ou est vide.");
        return;
    }

    const listeProduitsDiv = document.getElementById('liste-produits');

    produits.forEach(produit => {
        // Crée l'élément conteneur pour la carte de produit
        const carte = document.createElement('div');
        // Utilisez la classe CSS 'carte-produit' ou 'shop-card' que vous avez déjà créée
        carte.className = 'carte-produit'; 

        // Structure HTML de la carte
        carte.innerHTML = `
            <img src="${produit.image}" alt="${produit.nom}" class="image-produit">
            <h2>${produit.nom}</h2>
            <p class="description-produit">${produit.description}</p>
            <div class="prix">${produit.prix} €</div>
            <button class="bouton-acheter" onclick="ajouterAuPanier(${produit.id})">Acheter</button>
        `;

        listeProduitsDiv.appendChild(carte);
    });
});

// Fonction pour simuler l'ajout au panier/achat (vous pouvez la développer)
function ajouterAuPanier(produitId) {
    const produitSelectionne = produits.find(p => p.id === produitId);
    
    if (produitSelectionne) {
        alert(`Merci ! Le produit "${produitSelectionne.nom}" a été ajouté à votre panier/liste d'achat. (Logique d'achat à connecter ici)`);
        // Ici, vous ajouteriez la logique réelle pour interagir avec le système de paiement (PayPal, Stripe, etc.)
    }
}