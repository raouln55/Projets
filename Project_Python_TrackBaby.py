# Projet Python track baby

print('Bienvenue dans ce programme de vérification des constantes du nourrisson !')

Genre = input('Veuillez entrer le genre de votre nourrisson ("g" pour garçon et "f" pour fille) :')

Genre_Test = Genre == 'f' or Genre == 'g'
while Genre_Test is False :
    Genre = input('Veuillez entrer le genre de votre nourrisson ("g" pour garçon et "f" pour fille) :')
    Genre_Test = Genre == 'f' or Genre == 'g'

# Fonction qui teste si l'utilisateur ne  rentre bien que des chiffres
def Test_Digit(Constante) :
    return Constante.isdigit()


Age = input ('Veuillez entrer l\'age de votre nourrisson en mois (entre 0 et 60 mois) :')
while Test_Digit(Age) is False :
    Age = input ('Veuillez entrer l\'age de votre nourrisson en mois (entre 0 et 60 mois) :')

# Vérifie si l'age est bien rentré en chiffres et si > 0 et < 60 mois
Age_Test = Test_Digit(Age) is False or ((int(Age) < 0 or int(Age) > 60))
while Age_Test is True :    
    Age = input('Veuillez rentrer une valeur correcte (entre 0 et 60 mois) :')
    Age_Test = Test_Digit(Age) is False or ((int(Age) < 0 or int(Age) > 60))


Poids = input('Veuillez entrer le poids de votre nourrisson en "kg" :')
while Test_Digit(Poids) is False :
    Poids = input ('Veuillez entrer le poids de votre nourrisson en "kg" :')

Taille = input('Veuillez entrer la taile de votre nourrisson en "cm" :')
while Test_Digit(Taille) is False :
    Taille = input ('Veuillez entrer la taile de votre nourrisson en "cm" :')

Perimetre = input('Veuillez entrer le périmètre cranien de votre nourrisson en "cm" :')
while Test_Digit(Perimetre) is False :
    Perimetre = input ('Veuillez entrer le périmètre cranien de votre nourrisson en "cm" :')

# Importation des données du fichier nourrisson-step1
from nourrisson_step1 import low_weights_boys, low_heights_boys, low_skulls_boys, high_weights_boys, high_heights_boys, high_skulls_boys, low_weights_girls, low_heights_girls, low_skulls_girls, high_weights_girls, high_heights_girls, high_skulls_girls 

# Evaluation du poids par rapport à la norme (fille ou garçon)
if Genre == 'g' :
    print('La norme de poids pour un garçon de ' + Age + ' mois est situé entre ' + str(low_weights_boys[int(Age)]) + ' kg et ' + str(high_weights_boys[int(Age)]) + ' kg')
    if float(Poids) > high_weights_boys[int(Age)] or float(Poids) < low_weights_boys[int(Age)] :
        print('Le poids de votre nourrisson (' + Poids + ' kg) est en dehors de la norme')
    else :
        print('Le poids de votre nourrisson (' + Poids + ' kg) est dans la norme')
elif Genre == 'f' :
    print('La norme de poids pour une fille de ' + Age + ' mois est situé entre ' + str(low_weights_girls[int(Age)]) + ' kg et ' + str(high_weights_girls[int(Age)]) + ' kg')
    if float(Poids) > high_weights_girls[int(Age)] or float(Poids) < low_weights_girls[int(Age)] :
        print('Le poids de votre nourrisson (' + Poids + ' kg) est en dehors de la norme')
    else :
        print('Le poids de votre nourrisson (' + Poids + ' kg) est dans la norme')


# Evaluation de la taille par rapport à la norme (fille ou garçon)
if Genre == 'g' :
    print('La norme de Taille pour un garçon de ' + Age + ' mois est situé entre ' + str(low_heights_boys[int(Age)]) + ' cm et ' + str(high_heights_boys[int(Age)]) + ' cm')
    if float(Taille) > high_heights_boys[int(Age)] or float(Taille) < low_heights_boys[int(Age)] :
        print('La taille de votre nourrisson (' + Taille + ' cm) est en dehors de la norme')
    else :
        print('La taille de votre nourrisson (' + Taille + ' cm) est dans la norme')
elif Genre == 'f' :
    print('La norme de taille pour une fille de ' + Age + ' mois est situé entre ' + str(low_heights_girls[int(Age)]) + ' cm et ' + str(high_heights_girls[int(Age)]) + ' cm')
    if float(Taille) > high_heights_girls[int(Age)] or float(Taille) < low_heights_girls[int(Age)] :
        print('La taille de votre nourrisson (' + Taille + ' cm) est en dehors de la norme')
    else :
        print('La taille de votre nourrisson (' + Taille + ' cm) est dans la norme')


# Evaluation du périmètre de crane par rapport à la norme (fille ou garçon)
if Genre == 'g' :
    print('La norme de périmètre cranien pour un garçon de ' + Age + ' mois est situé entre ' + str(low_skulls_boys[int(Age)]) + ' cm et ' + str(high_skulls_boys[int(Age)]) + ' cm')
    if float(Perimetre) > high_skulls_boys[int(Age)] or float(Perimetre) < low_skulls_boys[int(Age)] :
        print('Le périmètre cranien de votre nourrisson (' + Perimetre + ' cm) est en dehors de la norme')
    else :
        print('Le périmètre cranien de votre nourrisson (' + Perimetre + ' cm) est dans la norme')
elif Genre == 'f' :
    print('La norme de périmètre cranien pour une fille de ' + Age + ' mois est situé entre ' + str(low_skulls_girls[int(Age)]) + ' cm et ' + str(high_skulls_girls[int(Age)]) + ' cm')
    if float(Perimetre) > high_skulls_girls[int(Age)] or float(Perimetre) < low_skulls_girls[int(Age)] :
        print('Le périmètre cranien de votre nourrisson (' + Perimetre + ' cm) est en dehors de la norme')
    else :
        print('Le périmètre cranien de votre nourrisson (' + Perimetre + ' cm) est dans la norme')













