import {Component, OnInit} from '@angular/core';
import {ForumService} from '../../../core/services/forum.service';
import {Thread} from '../../../core/models/thread.model';
import {UserService} from '../../../core/services/user.service';
import {FormBuilder} from '@angular/forms';
import {SocketService} from '../../../core/services/socket.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  threads: Thread[];
  error: any;
  checkoutForm;

  constructor(private forumService: ForumService, private userService: UserService, private formBuilder: FormBuilder,
              private socketService: SocketService) {
    this.checkoutForm = this.formBuilder.group({
      content: ''
    });
    this.socketService.initSocket();
    this.socketService.onMessage()
      .subscribe((message: any) => {
        this.getThreads();
      });

  }


  getThreads(): void {
    this.forumService
      .getForum()
      .subscribe(
        threads => (this.threads = threads),
        error => (this.error = error)
      );
  }

  addThread(content: any) {
    this.forumService.addThread(content.content, this.userService.getSelectedUser.id).subscribe(
      thread => {
        this.threads.push(thread);
        this.socketService.send('data');
      });
  }

  ngOnInit() {
    this.getThreads();
  }

}
