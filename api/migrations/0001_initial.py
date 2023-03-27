# Generated by Django 4.1 on 2023-02-20 23:30

import api.tools
from django.db import migrations, models
import django.db.models.deletion

class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patent', models.CharField(max_length=6)),
                ('car_model', models.CharField(max_length=100)),
                ('status', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='CarType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='DocumentType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Mining',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('code', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='PersonType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, unique=True)),
                ('password', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=100)),
                ('mining', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.mining')),
                ('person_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.persontype')),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('upload', models.FileField(upload_to=api.tools.define_product_path)),
                ('expired_date', models.DateField()),
                ('has_expired', models.BooleanField(default=False)),
                ('document_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.documenttype')),
            ],
        ),
        migrations.CreateModel(
            name='CostCenter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('code', models.CharField(max_length=100)),
                ('mining', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.mining')),
            ],
        ),
        migrations.CreateModel(
            name='CarDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.car')),
                ('document', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.document')),
            ],
        ),
        migrations.AddField(
            model_name='car',
            name='car_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.cartype'),
        ),
        migrations.AddField(
            model_name='car',
            name='cost_center',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.costcenter'),
        ),
    ]
