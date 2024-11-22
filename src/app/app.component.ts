import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component04Component } from "./components/component04/component04.component";
import { Component05Component } from "./components/component05/component05.component";
import { Component06Component } from "./components/component06/component06.component";
import { Component07Component } from "./components/component07/component07.component";
import { Component08Component } from "./components/component08/component08.component";
import { Component09Component } from "./components/component09/component09.component";
import { Component10Component } from "./components/component10/component10.component";
import { Component11Component } from "./components/component11/component11.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component04Component, Component05Component, Component06Component, Component07Component, Component08Component, Component09Component, Component10Component, Component11Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estudos_angular';
}
