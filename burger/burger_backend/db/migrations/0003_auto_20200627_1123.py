# Generated by Django 3.0.7 on 2020-06-27 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0002_auto_20200623_1956'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='ingredients',
        ),
        migrations.AddField(
            model_name='order',
            name='bacon',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='cheese',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='meat',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='salad',
            field=models.IntegerField(null=True),
        ),
    ]