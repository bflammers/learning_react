# Generated by Django 3.0.8 on 2020-07-14 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0003_auto_20200627_1123'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='bacon',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='order',
            name='cheese',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='order',
            name='meat',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='order',
            name='salad',
            field=models.IntegerField(default=0),
        ),
    ]
