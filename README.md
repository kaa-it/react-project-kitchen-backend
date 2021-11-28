# Проектная кухня CosmicTeam

Проект из Проектной кухни команды CosmicTeam.

Сайт: [CosmicTeam](http://cosmicteam.cf)

## Создание дистрибутива

* Скоппировать в папку build собранный проект фронтэнда
* Установить docker как указано [здесь](https://docs.docker.com/get-docker/)
* Зарегистрировать свой аккаунт на [DockerHub](https://hub.docker.com/)
* Заменить в Makefile логин akruglov на свой
* Выполнить команду make push для сборки образа и отправки его на DockerHub

## Установка готового дистрибутива

* Перенести на сервер, на котором устанавливается система, файл docker-compose.yml
* Запустить команду docker-compose up -d


