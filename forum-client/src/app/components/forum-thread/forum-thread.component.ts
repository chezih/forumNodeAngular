import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ForumService} from '../../../core/services/forum.service';
import {Thread} from '../../../core/models/thread.model';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';
import {SocketService} from '../../../core/services/socket.service';

@Component({
  selector: 'app-forum-thread',
  templateUrl: './forum-thread.component.html',
  styleUrls: ['./forum-thread.component.scss']
})
export class ForumThreadComponent implements OnInit {
  error: any;
  checkoutForm;

  @Input() thread: Thread;

  constructor(private forumService: ForumService, private userService: UserService, private formBuilder: FormBuilder,
              private socketService: SocketService) {
    this.checkoutForm = this.formBuilder.group({
      content: ''
    });
  }

  addComment(content: any) {
    this.forumService.addComment(content.content, this.userService.getSelectedUser.id, this.thread.id).subscribe(
      comment => {
        this.thread.comments.push(comment);
        this.socketService.send('data');
      });
  }

  ngOnInit(): void {
  }


}
