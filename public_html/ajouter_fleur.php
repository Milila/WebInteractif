<?php

echo "test";
if (!empty($_POST)) {
    try {
        $bdd = new PDO('mysql:host=localhost;dbname=fleursbdd;charset=utf8', 'root', '');
        $nom = $_POST['nom'];

        $time = strtotime($_POST['date']);
        if ($time != false) {
            $date = date('Y-m-d', $time);
            $date = $date .' 00:00:00';
            echo $date;
        } else {
            echo 'Invalid Date: ' . $_POST['dateFrom'];
            // fix it.
        }

        //$date = $_POST['date'];
        $couleur = $_POST['couleur'];
        $prix = $_POST['prix'];
        $image = $_POST['image'];
        $variete = $_POST['variete'];
        /*
          echo $nom;
          echo $date;
          echo $couleur;
          echo $prix;
          echo $image;
          echo $variete;
         */
        // On ajoute la variete
        //$bdd->exec("INSERT INTO variete(Nom) VALUES('" . $variete . "')");
        $reponse = $bdd->query('SELECT idVariete FROM variete WHERE Nom=\'' . $variete . '\'');
        $donnees = $reponse->fetch();
        $idVariete = $donnees['idVariete'];
        
        //On ajoute l'image
        //$bdd->exec("INSERT INTO image(URL) VALUES('" . $image . "')");
        $reponse = $bdd->query('SELECT idImage FROM image WHERE URL=\'' . $image . '\'');
        $donnees = $reponse->fetch();
        $idImage = $donnees['idImage'];
       
        //echo $idImage. "    +   " .$idVariete;

        echo 'INSERT INTO fleur(Nom, Date, Couleur, Prix, Origine, Variete_idVariete, Image_idImage) VALUES(\'' . $nom . '\',\'' . $date . '\', \'' . $couleur . '\', ' . $prix . ',' . $idVariete . ',' . $idImage . ')';

        $bdd->exec('INSERT INTO fleur(Nom, Date, Couleur, Prix, Variete_idVariete, Image_idImage) VALUES(\'' . $nom . '\',\'' . $date . '\', \'' . $couleur . '\', ' . $prix . ',' . $idVariete . ',' . $idImage . ')');
        echo "</br>";
        //echo 'Le jeu a bien été ajouté !';
    } catch (Exception $e) {
        echo "erreur ouverture bdd";
        die('Erreur : ' . $e->getMessage());
    }
}
?>
