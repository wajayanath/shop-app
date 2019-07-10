import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories',
      ref => ref.orderByChild('name')
    ).snapshotChanges()
    .pipe(
      map(categories => {
        return categories.map(a => ({ key: a.key, ...a.payload.val() }))
       }
      )
    );
}
}
