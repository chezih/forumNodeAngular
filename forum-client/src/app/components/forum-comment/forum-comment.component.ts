import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../core/models/comment.model';

@Component({
  selector: 'app-forum-comment',
  templateUrl: './forum-comment.component.html',
  styleUrls: ['./forum-comment.component.scss']
})
export class ForumCommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor() {
  }

  ngOnInit() {
  }

}
