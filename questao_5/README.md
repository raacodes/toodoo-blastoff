# QUESTÃO 5

Descreva em CSS a seguinte regra: somente o último item de uma lista
não deve ter uma linha na sua base.

```
li{
    text-decoration: underline;
}
li:last-child{
    text-decoration: none;
}
```