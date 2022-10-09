# staff manager

- open command prompt 
- provide the environment
`workon djangoenv`

- create a new project
`django-admin startproject staff_manager`

- create a new application
`python manage.py startapp api`

- install django rest framework
`pip install djangorestframework`

- install psycopg2 in order to use postgres
`pip install psycopg2`

- open pgadmin and add a new database called staff_managerDB

add the following to the settings.py file
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'staff_managerDB',
        'USER':'postgres',
        'PASSWORD':'postgres',
        'HOST':'localhost'
    }
}
```
- create the migration file
`python manage.py makemigratrations staff`
`python manage.py migrate`
