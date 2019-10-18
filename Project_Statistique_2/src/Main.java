import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

public class Main {

    private static String[] selectFile;

    public static void main(String[] args) throws IllegalStateException, FileNotFoundException {
        ArrayList<String> addFile = new ArrayList<String>();

        //Les fichiers disponibles sont stockés dans ce tableau de chaines
        String[] listOfBooks = {"Spinoza-Traite_Politique","Spinoza-reforme","Spinoza-Ethique","Spinoza-Ethique2","Smith-Richesse_des_Nations_1","Smith-Richesse_des_Nations_2","Smith-Richesse_des_Nations_3","Smith-Richesse_des_Nations_4","Smith-Richesse_des_Nations_5","mots"};
        int p = 0;

        System.out.println();
        System.out.println("Les fichiers livres suivants sont disponibles comme choix de fichiers à ajouter à la liste : ");
        System.out.println("\n Spinoza-Traite_Politique \n Spinoza-reforme \n Spinoza-Ethique2 \n Spinoza-Ethique \n Smith-Richesse_des_Nations_1 \n Smith-Richesse_des_Nations_2 \n Smith-Richesse_des_Nations_3 \n Smith-Richesse_des_Nations_4' \n Smith-Richesse_des_Nations_5 \n mots");
        System.out.println();

        do {
        //Affichage du Menu
        System.out.println();
        System.out.println("MENU");

        System.out.println();
        System.out.println("1. Lister les fichiers sélectionnés");
        System.out.println();
        System.out.println("2. Ajouter un fichier");
        System.out.println();
        System.out.println("3. Supprimer un fichier");
        System.out.println();
        System.out.println("4. Afficher des informations sur un livre");
        System.out.println();
        System.out.println("5. Quitter le programme");
        System.out.println("Entrez le numéro correspondant à votre choix...");
        Scanner sc = new Scanner(System.in);
        String answer = sc.nextLine();

        switch (answer) {
            case "1": {
                System.out.println("Liste des fichiers sélectionnés");
                System.out.println(Arrays.toString((addFile.toArray())));
                break;
            }
            case "2": {
                System.out.println("Entrez le nom du fichier : ");
                String choice = sc.nextLine();
                addFile.add(choice);
                System.out.println("Liste des fichiers");
                System.out.println(Arrays.toString((addFile.toArray())));
                break;
            }
            case "3":{
                System.out.println("Liste des fichiers");
                System.out.println(Arrays.toString((addFile.toArray())));
                System.out.println("Quel fichier voulez-vous supprimer ?");
                String remove = sc.nextLine();
                for (int n = 0; n < addFile.size(); n++) {
                    if (addFile.get(n).equals(remove)){
                        addFile.remove(n);
                    }
                }
                System.out.println("Vous avez supprimé le fichier : " + remove)
                ;break;
            }
            case "4": {
                System.out.println();
                System.out.println("1. Afficher la liste des fichiers");
                System.out.println();
                System.out.println("2. Choisir un fichier");
                System.out.println();
                System.out.println("3. Autres options");
                System.out.println("Entrez le numéro correspondant à votre choix : ");
                String answer2 = sc.nextLine();
                switch (answer2) {
                    case "1": {
                        System.out.println("Liste des fichiers");
                        for (int n = 0; n != listOfBooks.length; n++ ){
                            System.out.println((n+1) + "- " + listOfBooks[n]);
                        }
                        break;
                    }
                    case "2": {
                        System.out.println();
                        System.out.println("Entrez le numéro du fichier tel qu'affiché dans la liste des fichiers");
                        System.out.println();
                        String answer3 = sc.nextLine();
                        int fileChoice = Integer.parseInt(answer3); //answer3.charAt(0);
                        if (fileChoice >= 1 && fileChoice <= listOfBooks.length) {
                            String fileChoic = listOfBooks[fileChoice - 1];
                            System.out.println("Vous avez choisi le livre " + listOfBooks[fileChoice-1]);

                            // Permet d'afficher le nombre de mots et de lignes même s'il n'est pas possible pour le moment de les obtenir par le menu
                            String[] selectFile = fileProcess(fileChoic);
                            String numbWord = selectFile[1];
                            String numbLine = selectFile[0];
                            System.out.println(" Le nombre de mots du fichier est " + numbWord + " mots");
                            System.out.println(" Le nombre de lignes du fichier est " + numbLine + " lignes");
                        }
                        break;
                    }
                    case "3": {
                        System.out.println();
                        System.out.println("1. Afficher le nombre de lignes du fichier");
                        System.out.println();
                        System.out.println("2. Afficher le nombre de mots du fichier");
                        String answer4 = sc.nextLine();
                        switch (answer4) {
                            case "1": {
                               //System.out.println(selectFile[1]);
                            }
                            case "2":{
                                //System.out.println(selectFile[0]);
                            }

                        }
                    }
                    default:
                        throw new IllegalStateException("Vous n'avez sélectionné aucun choix valide");
                }
                break;

            }
            case "5": {
                System.out.println("Vous avez choisi ''" + answer + ". Quitter le programme''.\nLe programme va s'arrêter");
                System.out.println("Au revoir");
                p = 1;
                break;
            }
            default:
                throw new IllegalStateException("Vous n'avez sélectionné aucun choix valide: " + answer + " n'est pas une valeur de choixde la liste");
        }
    } while (p == 0);
    }



    // Ajoute un mot à la liste des fichiers sélectionnés
 //   private static String addFile(String choice) {
 //       ArrayList<String> addFile = new ArrayList<String>();
 //       addFile.add(choice);
 //       return Arrays.toString((addFile.toArray()));
 //   }


    //Traitement du fichier sélectionné pour obtenir le nombre de lignes et le nombre de mots différents dans le fichier
    public static String[] fileProcess(String file) throws FileNotFoundException {
        // Extraction des mots (du fichier .txt déjà traité) dans une chaine de caractères avec ';' comme séparateur de mots
        Scanner sc = new Scanner(new File(file + ".txt"));
        String extractionOfWords = sc.nextLine();

        while (sc.hasNextLine()) {
            extractionOfWords += (";" + sc.nextLine());
        }

        // Création de la liste de tableau contenant tous les mots extraits du fichier .txt
        String[] extractedWords = extractionOfWords.toString().split(";");
        String extractWords = Arrays.toString(extractedWords);

        // Utilisation du HashMap pour calculer l'occurrence des mots
        HashMap<String, Integer> words = new HashMap<>();
        for (int i = 0; i < extractedWords.length; i++) {

            //changement de nombre associé au mot lu en direct
            if (words.containsKey(extractedWords[i])) {
                int wordCount = words.get(extractedWords[i]);
                words.put(extractedWords[i], wordCount + 1);
            } else {
                //Ajout du mot et du nombre d'occurences associées
                words.put(extractedWords[i], 1);
                //   System.out.println(words.size());
            }
        }
        // Calcul du nombre de mots du fichier
        int wordNumber = words.size();

        //Les informations concernant le nombre de mots et le nombre de lignes sont stockées dans fileProcessed
        String[] fileProcessed = new String[2];
        fileProcessed[0] = ""+ wordNumber;
        fileProcessed[1] = ""+ extractedWords.length;
        return fileProcessed;
    }

    public static void setSelectFile(String[] selectFile) {
        Main.selectFile = selectFile;
    }
}









