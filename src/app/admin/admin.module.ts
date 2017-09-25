import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRouterModule } from './admin-router.module';

// Guards
import { AdminGuard } from '../guards/admin.guard';

// Services
import { UserService } from '../services/user.service';

// Pipes
import { SearchPipe } from '../pipes/search.pipe';

// Components
import {
    AdminComponent,
    AddComponent,
    EditComponent,
    ListComponent
} from './components/index.components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRouterModule
    ],
    declarations: [
        AdminComponent,
        AddComponent,
        ListComponent,
        EditComponent,
        SearchPipe
    ],
    exports: [
        AdminComponent,
        AddComponent,
        ListComponent,
        EditComponent
    ],
    providers: [ AdminGuard, UserService ]
})
export class AdminModule {}
