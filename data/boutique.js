// Fichier : js/boutique.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Vérification des données
    // Le script attend que le tableau 'produits' (défini dans data/produits.js) soit chargé.
    if (typeof produits === 'undefined' || produits.length === 0) {
        console.error("Le tableau 'produits' n'est pas chargé ou est vide. Vérifiez le fichier 'data/produits.js' et sa liaison dans 'boutique.html'.");
        return;
    }

    const listeProduitsDiv = document.getElementById('liste-produits');

    // 2. Génération des cartes de produits
    produits.forEach(produit => {
        // Crée l'élément conteneur pour la carte de produit
        const carte = document.createElement('div');
        // Utilisez la classe CSS 'carte-produit' ou toute autre classe de votre feuille de style
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

// Fonction d'achat (pour connecter à un système de paiement externe ou pour des messages)
function ajouterAuPanier(produitId) {
    // Trouve le produit correspondant à l'ID
    const produitSelectionne = produits.find(p => p.id === produitId);
    
    if (produitSelectionne) {
        // Alerte l'utilisateur de la sélection (à remplacer par une vraie logique de panier/paiement)
        alert(`Vous avez sélectionné "${produitSelectionne.nom}" pour ${produitSelectionne.prix} €. (Connectez ici votre lien de paiement !)`);
    }
}