# Generated by Django 4.1 on 2022-11-12 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='car_model',
            field=models.CharField(max_length=100),
        ),
        migrations.DeleteModel(
            name='CarModel',
        ),
    ]