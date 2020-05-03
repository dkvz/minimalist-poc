# Attempt at web design #2
I felt I needed more than Codepen.

## Fonts
- Volkov
- Nunito - https://fonts.google.com/specimen/Nunito

I'm not sure how you manually import fonts since there are multiple formats, what's in that file:
```
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"> 
```

This downloads the truetype version only. Is there a way to use WOFF when possible?

Yes, the following works with automatic fallback, I ditched IE6->9 on purpose:
```css
@font-face {
  font-family: 'MyWebFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff'),
       url('myfont.ttf') format('truetype');
}
```

## Social icons
I think I had some for another website.

I need:
- Github
- Email

## Favicon
Should be a two letter thing in a circle, I'll make it later.

## Collapsible
It would be cool to have an icon that rotates when we open the collapsible.

I think I'm going to use an invisible checkbox + label and just CSS.

-> I need to add an outline
-> What is visibility "collapse"?

# TODO
- [x] Need a link style for the article page
- [ ] Test the noscript menu in article.html
- [ ] For the collapsable sections in the menu, add all the aria stuff related to collapsable
- [x] Each case study should have a link to the next one
- [ ] Try main title in Italic when trying out fonts
- [ ] Change the email for the social thiny thing
- [ ] I could add one of my yellow icons at random to the menu button
- [x] Change the selection color
- [x] I need a language selector