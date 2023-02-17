from django import forms
from .models import Comment

class CommentFrom(form.ModelForm):
	class Meta:
		model = ""
		fields = ["name", "email", "body"]