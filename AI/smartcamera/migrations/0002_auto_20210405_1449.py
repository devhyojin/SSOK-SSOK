# Generated by Django 3.1.7 on 2021-04-05 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('smartcamera', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='images',
            name='image',
            field=models.FileField(null=True, upload_to='images/'),
        ),
    ]
