import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '@yamcs/webapp-sdk';
import { BehaviorSubject } from 'rxjs';
import { ConfigService, WebsiteConfig } from '../../core/services/ConfigService';
import { YamcsService } from '../../core/services/YamcsService';

@Component({
  templateUrl: './ProfilePage.html',
  styleUrls: ['./ProfilePage.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {

  user$ = new BehaviorSubject<User | null>(null);
  config: WebsiteConfig;

  constructor(title: Title, configService: ConfigService, yamcs: YamcsService) {
    title.setTitle('Profile');
    this.config = configService.getConfig();

    // Fetch a fresh copy instead of using the one from AuthService,
    // there may have been updates (clearance in particular)
    yamcs.yamcsClient.getUserInfo().then(userinfo => {
      this.user$.next(new User(userinfo));
    });
  }
}
