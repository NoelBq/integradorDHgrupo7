var prev = document.getElementById('prev');
var next = document.getElementById('next');
var slider = document.getElementById('slider');
var total = 0, step = 100;

prev.addEventListener('click', slide);
next.addEventListener('click', slide);

function slide()
{
  if(this.getAttribute('id') == 'prev')
  {
    if(total == 0)
    {
      total = -400;
      slider.style.left = total + '%';
    }
    else
    {
      total += step;
      slider.style.left = total + '%';
    }
  }
  else
  {
    if(total == -400)
    {
      total = 0;
      slider.style.left = total;
    }
    else
    {
      total -= step;
      slider.style.left = total + '%';
    }
  }
}
