import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick(element) {
    element = document.getElementById("img01")
    element.src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }


  open() {
    let mySidebar = document.getElementById("mySidebar");
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }

  close() {
    let mySidebar = document.getElementById("mySidebar");
    mySidebar.style.display = "none";
  }
}
