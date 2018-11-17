import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // different ways to define selectors
  // As a attribut [app-servers] --> <div app-servers></div>,
  // As a class '.app-servers' -> <div class='app-servers></div>'
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server was created!';
  allowNewServer = false;
  serverName = 'Test Server';
  serverCreated = false;
  toggle = false;
  totalToggle = [];
  count = 0;
  servers = ['TestServer', 'TestServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  toggleDisplay() {
    this.toggle = !this.toggle;
    this.count++;
    this.totalToggle.push('toggle count:' + this.count);
  }
  // onUpdateServerName(event: any) {
  // console.log(event);
  // this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
